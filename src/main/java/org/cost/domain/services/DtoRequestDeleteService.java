package org.cost.domain.services;

import jakarta.validation.Valid;
import org.cost.domain.project.Project;

public record DtoRequestDeleteService(@Valid String id,
                                      @Valid Integer cost_in_cents,
                                      String description,
                                      @Valid Project project) {
}
