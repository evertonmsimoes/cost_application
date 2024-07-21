package org.cost.domain.services;

import org.cost.domain.project.Project;

public record DtoRequestCreateService(Project project, String name,  Integer cost_in_cents, String description) {
}
