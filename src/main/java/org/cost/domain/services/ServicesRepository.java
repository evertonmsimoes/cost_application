package org.cost.domain.services;

import org.cost.domain.project.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServicesRepository extends JpaRepository<Services, String> {


    List<Services> findByProject(Project project);
}
