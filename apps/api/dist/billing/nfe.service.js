"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NfeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NfeService = void 0;
const common_1 = require("@nestjs/common");
let NfeService = NfeService_1 = class NfeService {
    constructor() {
        this.logger = new common_1.Logger(NfeService_1.name);
    }
    async emitInvoice(invoiceId, amount, clientData) {
        this.logger.log(`Emitting NF-e for Invoice ${invoiceId} - Value: R$ ${amount} - Client: ${clientData.name} (${clientData.cnpj})`);
        return new Promise((resolve) => {
            setTimeout(() => {
                this.logger.log(`NF-e emitted successfully for Invoice ${invoiceId}`);
                resolve({
                    nfeId: 'mock-nfe-' + Date.now(),
                    status: 'authorized',
                    url: 'https://nfe.io/mock-pdf',
                    accessKey: '35123456789012345678901234567890123456789012'
                });
            }, 1000);
        });
    }
};
exports.NfeService = NfeService;
exports.NfeService = NfeService = NfeService_1 = __decorate([
    (0, common_1.Injectable)()
], NfeService);
//# sourceMappingURL=nfe.service.js.map