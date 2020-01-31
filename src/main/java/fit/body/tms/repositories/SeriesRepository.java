package fit.body.tms.repositories;

import fit.body.tms.entities.Series;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "Series")
public interface SeriesRepository extends CrudRepository<Series, String > {
}
