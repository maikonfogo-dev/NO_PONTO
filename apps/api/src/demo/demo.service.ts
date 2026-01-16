import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDemoRequestDto } from './dto/create-demo-request.dto';
import { UpdateDemoStatusDto } from './dto/update-demo-status.dto';
import axios from 'axios';

@Injectable()
export class DemoService {
  constructor(private prisma: PrismaService) {}

  private get demoRequest() {
    return (this.prisma as any).demoRequest;
  }

  async create(createDemoRequestDto: CreateDemoRequestDto) {
    // Validate Captcha
    const isCaptchaValid = await this.validateCaptcha(createDemoRequestDto.captchaToken);
    if (!isCaptchaValid) {
      throw new BadRequestException('Invalid captcha token');
    }

    const { captchaToken: _captchaToken, ...data } = createDemoRequestDto;

    return this.demoRequest.create({
      data: {
        ...data,
        status: 'PENDENTE',
      },
    });
  }

  private async validateCaptcha(token: string): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA'; // Default dummy key
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    try {
      const response = await axios.post(url, {
        secret: secretKey,
        response: token,
      });

      return response.data.success;
    } catch (error) {
      console.error('Captcha validation failed:', error);
      return false;
    }
  }

  async findAll(status?: string) {
    return this.demoRequest.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus(id: string, updateDemoStatusDto: UpdateDemoStatusDto) {
    return this.demoRequest.update({
      where: { id },
      data: { status: updateDemoStatusDto.status },
    });
  }
}
