import { DemoService } from './demo.service';
import { CreateDemoRequestDto } from './dto/create-demo-request.dto';
import { UpdateDemoStatusDto } from './dto/update-demo-status.dto';
export declare class DemoController {
    private readonly demoService;
    constructor(demoService: DemoService);
    create(createDemoRequestDto: CreateDemoRequestDto): Promise<any>;
    findAll(status?: string): Promise<any>;
    updateStatus(id: string, updateDemoStatusDto: UpdateDemoStatusDto): Promise<any>;
}
