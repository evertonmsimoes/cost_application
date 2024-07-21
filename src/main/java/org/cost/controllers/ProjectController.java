package org.cost.controllers;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.cost.domain.project.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectRepository repository;


    /* Retrive all Projects from the "project" table*/
    @GetMapping(path = "/all")
    public ResponseEntity getAllProject(){
        var getAllProject = repository.findAll();
        return ResponseEntity.ok(getAllProject);
    }

    /* Retrieve only active projects from the 'project' table */
    @GetMapping
    public ResponseEntity getAllProjectsAtive(){
        var getProjectActive = repository.findAllByActiveTrue();
        return ResponseEntity.ok(getProjectActive);
    }

    /* Created Route for returning a project */
    @GetMapping(path = "/{id}")
    public ResponseEntity getOneProject(@PathVariable String id){
        Optional<Project> getProject = repository.findById(id);
        if(getProject.isPresent()){
            Project oneProject = getProject.get();
            return ResponseEntity.ok(oneProject);
        }
        return ResponseEntity.ok().build();
    }

    @PatchMapping
    @Transactional
    public ResponseEntity alterProject(@RequestBody @Valid DtoAlterProjectRequest data){
        Optional<Project> getProjectAlter = repository.findById(data.id());
        if(getProjectAlter.isPresent()){
            Project alterProject = getProjectAlter.get();
            alterProject.setActive(data.active());
            if(data.name() != null) alterProject.setName(data.name());
            if(data.budget_in_cents() != null) alterProject.setBudget_in_cents(data.budget_in_cents());
            return ResponseEntity.ok(alterProject);
        }else throw new EntityNotFoundException();
    }

    /* Crated Route for create project */
    @PostMapping
    public ResponseEntity createProject(@RequestBody @Valid DtoCreateProjectRequest data){
        Project newProject = new Project(data);
        repository.save(newProject);
        return ResponseEntity.ok(newProject);
    }

}
