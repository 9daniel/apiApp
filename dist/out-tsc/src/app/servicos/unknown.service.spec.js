import { TestBed } from '@angular/core/testing';
import { UnknownService } from './unknown.service';
describe('UnknownService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(UnknownService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=unknown.service.spec.js.map