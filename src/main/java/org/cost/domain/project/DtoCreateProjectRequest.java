package org.cost.domain.project;

import org.cost.domain.categories.Categories;

public record DtoCreateProjectRequest(Categories categories, String name, Integer budget_in_cents) {
}
