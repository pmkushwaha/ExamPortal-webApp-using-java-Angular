package com.examportal.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table (name="roles")
public class Role {
	
@Id
private  Long roleId;
private String rolename;


@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "role")
private Set<UserRole> userRole=new HashSet<>();
public Role() {
	
}



public Set<UserRole> getUserRole() {
	return userRole;
}



public void setUserRole(Set<UserRole> userRole) {
	this.userRole = userRole;
}



public Role(Long roleId, String rolename) {
	super();
	this.roleId = roleId;
	this.rolename = rolename;
}
 

public Long getRoleId() {
	return roleId;
}

public void setRoleId(Long roleId) {
	this.roleId = roleId;
}

public String getRolename() {
	return rolename;
}

public void setRolename(String rolename) {
	this.rolename = rolename;
}



}
