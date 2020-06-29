package com.designpatterns.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.designpatterns.dao.InsuranceDAO;
import com.designpatterns.models.Insurance;

@Controller
public class InsuranceController {

	@Autowired
	InsuranceDAO insuranceDAO;

	@PostMapping("/addInsurance")
	public ResponseEntity<Boolean> addInsurance(@RequestBody Insurance insurance) throws Exception {
		boolean isAdded = false;
		System.out.println("addInsurance controller was called.");
		if (insurance == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		try {
			insuranceDAO.addInsurance(insurance);
			isAdded = true;
		} catch (Exception e) {
			throw e;
		}
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "*").body(isAdded);
	}

	@GetMapping("/viewAllPurchases")
	public ResponseEntity<List<Insurance>> viewAllPurchases() throws Exception {
		List<Insurance> insurances;
		try {
			System.out.println("ViewAllPurchases Controller was called...");
			insurances = insuranceDAO.viewAllInsurances();
		} catch (Exception e) {
			throw e;
		}
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "*").body(insurances);

	}

}
