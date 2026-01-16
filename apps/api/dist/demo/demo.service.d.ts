import { PrismaService } from '../prisma/prisma.service';
import { CreateDemoRequestDto } from './dto/create-demo-request.dto';
import { UpdateDemoStatusDto } from './dto/update-demo-status.dto';
export declare class DemoService {
    private prisma;
    constructor(prisma: PrismaService);
    private get demoRequest();
    create(createDemoRequestDto: CreateDemoRequestDto): Promise<any>;
    private validateCaptcha;
    findAll(status?: string): Promise<any>;
    updateStatus(id: string, updateDemoStatusDto: UpdateDemoStatusDto): Promise<any>;
}
