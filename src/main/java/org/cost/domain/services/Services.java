package org.cost.domain.services;

import jakarta.persistence.*;
import lombok.*;
import org.cost.domain.project.Project;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "services")
@Table(name = "services")
@EqualsAndHashCode(of = "id")
public class Services {
    @Id @GeneratedValue( strategy = GenerationType.UUID)
    private String id;

    @ManyToOne @JoinColumn(name = "id_project")
    private Project project;

    private String name;

    private Integer cost_in_cents;

    private String description;

    public Services(DtoRequestCreateService data){
        this.project = data.project();
        this.name = data.name();
        this.cost_in_cents = data.cost_in_cents();
        this.description = data.description();
    }
}
