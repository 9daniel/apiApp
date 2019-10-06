import { TestBed } from '@angular/core/testing';
import { FilmesService } from './filmes.service';
describe('FilmesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(FilmesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=filmes.service.spec.js.map