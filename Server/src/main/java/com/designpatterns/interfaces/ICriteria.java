package com.designpatterns.interfaces;

import java.util.List;

import com.designpatterns.models.Insurance;

public interface ICriteria {
	public List<Insurance> meetCriteria(List<Insurance> insurances);
}
