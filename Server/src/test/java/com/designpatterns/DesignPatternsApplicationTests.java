package com.designpatterns;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.thymeleaf.spring5.expression.Mvc;

import com.designpatterns.controllers.MvcController;

@SpringBootTest
class DesignPatternsApplicationTests {

	@Autowired
	MvcController mcvController;
	
	@Test
	void contextLoads() {
		assertThat(mcvController).isNotNull();
	}

}
