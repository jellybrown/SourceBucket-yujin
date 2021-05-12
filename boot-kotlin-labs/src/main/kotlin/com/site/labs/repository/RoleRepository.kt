package com.site.labs.repository

import com.site.labs.model.Role
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface RoleRepository : JpaRepository<Role, Long> {
    fun findByRoleName(roleName: String): Role?
}
