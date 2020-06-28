package com.designpatterns.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.designpatterns.models.Insurance;

@Service
public class InsuranceDAO {

	@Autowired
	DBConnection db;

	public Insurance addInsurance(Insurance insurance) throws Exception {

		String query = "Insert into test.Insurance(name, family_name, date, remarks, type) values (?,?,?,?,?);";
		Insurance newInsurance = null;
		try (Connection conn = db.getConnection()) {
			try (PreparedStatement state = conn.prepareStatement(query)) {
				int i = 1;
				state.setString(i++, insurance.getName());
				state.setString(i++, insurance.getFamilyName());
				state.setDate(i++, insurance.getDate());
				state.setString(i++, insurance.getRemarks());
				state.setString(i++, insurance.getType());

				state.executeUpdate();

				System.out.println("added successfully...");
				newInsurance = insurance;
			}

		} catch (Exception e) {
			throw e;
		}
		return newInsurance;
	}

	public List<Insurance> viewAllInsurances() throws Exception {
		String query = "SELECT * FROM test.Insurance;";
		
		List<Insurance> insurances = new ArrayList<>();
		List<Insurance> carInsurances = new ArrayList<>();
		List<Insurance> apartmentInsurances = new ArrayList<>();
		List<Insurance> lifeInsurances = new ArrayList<>();
		List<Insurance> healthInsurances = new ArrayList<>();
		List<Insurance> filteredInsurances = new ArrayList<>();

		CriteriaCar criteriaCar = new CriteriaCar();
		CriteriaApartment criteriaApartment = new CriteriaApartment();
		CriteriaLife criteriaLife = new CriteriaLife();
		CriteriaHealth criteriaHealth = new CriteriaHealth();
		
	
		try (Connection conn = db.getConnection()) {
			try (PreparedStatement state = conn.prepareStatement(query)) {
				ResultSet rs;
				rs = state.executeQuery();
				int i = 1;
				while (rs.next()) {
					insurances.add(new Insurance(
							rs.getString(i++), 
							rs.getString(i++), 
							rs.getDate(i++),
							rs.getString(i++), 
							rs.getString(i++)
					));
					i=1;
				}
				
				
				//filter the lists by their type.
				carInsurances = criteriaCar.meetCriteria(insurances);
				apartmentInsurances = criteriaApartment.meetCriteria(insurances);
				lifeInsurances = criteriaLife.meetCriteria(insurances);
				healthInsurances = criteriaHealth.meetCriteria(insurances);
				
				//add all insurances filtered by their type.
				filteredInsurances.addAll(carInsurances);
				filteredInsurances.addAll(apartmentInsurances);
				filteredInsurances.addAll(lifeInsurances);
				filteredInsurances.addAll(healthInsurances);
				
				
				System.out.println("fetched data successfully...");
			}
		} catch (Exception e) {
			throw e;
		}
		return filteredInsurances;
	}

}
