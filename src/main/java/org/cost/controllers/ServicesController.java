package org.cost.controllers;


import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.cost.domain.project.Project;
import org.cost.domain.project.ProjectRepository;
import org.cost.domain.services.DtoRequestCreateService;
import org.cost.domain.services.DtoRequestDeleteService;
import org.cost.domain.services.Services;
import org.cost.domain.services.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/services")
public class ServicesController {

    @Autowired
    ServicesRepository repository;

    @Autowired
    ProjectRepository projectRepository;

    @GetMapping
    public ResponseEntity getServiceForId(@Valid @RequestBody String id){
        Optional<Services> service = repository.findById(id);
        if(service.isPresent()) {
            Services serviceFound = service.get();
            return ResponseEntity.ok(serviceFound);
        } else throw new EntityNotFoundException();
    }

    @PostMapping
    @Transactional
    public ResponseEntity createProject(@Valid @RequestBody DtoRequestCreateService data){
        Services service = new Services(data);
        repository.save(service);
        Optional<Project> project = projectRepository.findById(data.project().getId());
        if(project.isPresent()){
            Project findProject = project.get();
            findProject.setCost(findProject.getCost() + service.getCost_in_cents());
        }
        return ResponseEntity.ok(service);
    }

    @GetMapping("/{id}")
    public ResponseEntity getAllProjectForByIdProject(@PathVariable @Valid String id){
        Optional<Project> project = projectRepository.findById(id);
        if(project.isPresent()){
            Project project1 = project.get();
            List<Services> listServices = repository.findByProject(project1);
            return ResponseEntity.ok(listServices);
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    @Transactional
    public  ResponseEntity removeService(@RequestBody @Valid DtoRequestDeleteService data){
        Optional<Project> findProject = projectRepository.findById(data.project().getId());
        if(findProject.isPresent()){
            Project project = findProject.get();
            project.setCost(project.getCost() - data.cost_in_cents());
            repository.deleteById(data.id());
            return ResponseEntity.ok().build();

        }else throw new EntityNotFoundException();
    }

}
