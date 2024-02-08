package com.examportal.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.examportal.model.User;
import com.examportal.rep.UserRepository;

@Service
public class UserDetailesServiceImpl implements UserDetailsService {

	@Autowired
	UserRepository userPerository; 
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 
		User user = this.userPerository.findByUsername(username);
		if(user==null) {
			System.out.println("User not found ");
			
			throw new UsernameNotFoundException(username);
		}
		return user;
	}

}
