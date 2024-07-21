package org.cost.domain.project;


import jakarta.persistence.*;
import lombok.*;
import org.cost.domain.categories.Categories;
import org.cost.domain.services.DtoRequestDeleteService;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "project")
@Table(name = "project")
@EqualsAndHashCode(of="id")
public class Project {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Categories categories;

    private String name;

    private Integer budget_in_cents;

    private boolean active;

    private Integer cost;

    public Project(DtoCreateProjectRequest data){
        this.categories = data.categories();
        this.name = data.name();
        this.budget_in_cents = data.budget_in_cents();
        this.active = true;
        this.cost = 0;
    }
    public Project(DtoRequestDeleteService data){
        this.categories = data.project().getCategories();
        this.name = data.project().getName();
        this.budget_in_cents = data.project().getBudget_in_cents();
        this.active = data.project().isActive();
        this.cost = data.project().getCost();
    }



}
