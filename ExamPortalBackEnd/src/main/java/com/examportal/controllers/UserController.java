package com.examportal.controllers;
 
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Role;
import com.examportal.model.User;
import com.examportal.model.UserRole;
import com.examportal.services.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

 
	@Autowired
	private UserService userService;
	
//	Create user 
	
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
	
//		creating role
		Set<UserRole>roles=new HashSet<>();
		
		Role role =new Role();
		role.setRoleId(45L);
		role.setRolename("NORMAL");
		
		UserRole userRole=new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		
		roles.add(userRole);
		
		
	return this.userService.createUser(user, roles);
		 
		
	}
	
	
//	get user
	
	@GetMapping("/{username}")
 public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
		
	}
	
	
	
//	
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
	}
	
}
