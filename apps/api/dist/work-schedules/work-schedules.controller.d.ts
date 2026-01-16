import { WorkSchedulesService } from './work-schedules.service';
export declare class WorkSchedulesController {
    private readonly workSchedulesService;
    constructor(workSchedulesService: WorkSchedulesService);
    create(createDto: any): import(".prisma/client").Prisma.Prisma__WorkScheduleClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        startTime: string;
        endTime: string;
        lunchStart: string | null;
        lunchEnd: string | null;
        tolerance: number;
        allowOvertime: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        startTime: string;
        endTime: string;
        lunchStart: string | null;
        lunchEnd: string | null;
        tolerance: number;
        allowOvertime: boolean;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__WorkScheduleClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        startTime: string;
        endTime: string;
        lunchStart: string | null;
        lunchEnd: string | null;
        tolerance: number;
        allowOvertime: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
