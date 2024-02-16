package com.examportal.serviceImpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.model.User;
import com.examportal.model.UserRole;
import com.examportal.rep.RoleRepository;
import com.examportal.rep.UserRepository;
import com.examportal.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	 @Autowired
	private UserRepository userRepository;
	 
	 @Autowired
	 private RoleRepository roleRepository;
	
	 
//	 creating user
	 
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local =this.userRepository.findByUsername(user.getUsername());
		
		if ( local!=null) {
			System.out.println("User IS already exist");
			throw new Exception("User Already present !!");
		}
		else {
			for(UserRole ur:userRoles)
			{
				roleRepository.save(ur.getRole());
			}
			
			user.getUsesrRoles().addAll(userRoles);
			local=this.userRepository.save(user);
		}
	return local;
	}


	@Override
	public User getUser(String username) {
	 
		return this.userRepository.findByUsername(username);
	}


	@Override
	public void deleteUser(Long userId) {
		 
	this.userRepository.deleteById(userId);	
	}

	

}
