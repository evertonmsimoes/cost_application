package org.cost.controllers;


import jakarta.validation.Valid;
import org.cost.domain.categories.Categories;
import org.cost.domain.categories.CategoriesRepository;
import org.cost.domain.categories.DtoCreateCategorieRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
public class CategoriesController {
    @Autowired
    CategoriesRepository repository;

    @GetMapping
    public  ResponseEntity getActiveCategories(){
        var allActiveCategories = repository.findByActiveTrue();
        return  ResponseEntity.ok(allActiveCategories);
    }

    @PostMapping
    public ResponseEntity createCategorie(@RequestBody @Valid DtoCreateCategorieRequest data){
        Categories categorie = new Categories(data);
        repository.save(categorie);
        return ResponseEntity.ok(categorie);
    }

}
