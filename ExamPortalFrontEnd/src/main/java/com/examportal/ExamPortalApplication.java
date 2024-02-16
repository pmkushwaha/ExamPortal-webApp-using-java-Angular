package com.examportal;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.examportal.model.Role;
import com.examportal.model.User;
import com.examportal.model.UserRole;
import com.examportal.services.UserService;

@SpringBootApplication
public class ExamPortalApplication  {

//	to use commented code plz add below code to class signature
//	"implements CommandLineRunner"
	
	@Autowired
	private UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(ExamPortalApplication.class, args);
		
		System.out.println("Project started Successfully");
	}

//	@Override
//	public void run(String... args) throws Exception {
//		System.out.println("successfull run");
//		
//		User user=new User();
//		user.setFirstname("prem");
//		user.setLastname("kumar");
//		user.setEmail("pmkushwaha02@gmail.com");
//		user.setPassword("prem@123");
//		user.setPhone("9576890891");
//		
//		Role role1=new Role();
//		role1.setRoleId(44L);
//		role1.setRolename("Admin");
//		
//		Set<UserRole>userRoleSet=new HashSet<>();
//		
//		UserRole userRole=new UserRole();
//		
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRoleSet.add(userRole);
//		
//		User user1 = this.userService.createUser(user,userRoleSet);
//		System.out.println(user1.getUsername());
//	}

}
