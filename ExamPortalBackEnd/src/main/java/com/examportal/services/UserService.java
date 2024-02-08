package com.examportal.services;

import java.util.Set;

import com.examportal.model.User;
import com.examportal.model.UserRole;

public interface UserService {

//	creating user 
	public User createUser(User user,Set<UserRole> userRoles) throws Exception;

	
//	get User by username
	public User getUser(String username);
 
//delete user

	public void deleteUser(Long userId);
	

	
 }
