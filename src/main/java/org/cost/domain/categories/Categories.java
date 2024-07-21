package org.cost.domain.categories;


import jakarta.persistence.*;
import lombok.*;

@Entity(name="categories")
@Table(name="categories")
@EqualsAndHashCode(of="id")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Categories {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;

    private Boolean active;

    public Categories(DtoCreateCategorieRequest data){
        this.name = data.name();
        this.active = data.active();
    }
}
