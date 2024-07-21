package org.cost.domain.project;

import jakarta.validation.Valid;

public record DtoRequestDesabelProject(@Valid String id, @Valid boolean active, String name, Integer budget_in_cents) {
}
