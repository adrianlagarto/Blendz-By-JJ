import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const AdminServices = () => {
  return (
    <div>
      <h1>Admin Services Management</h1>
      {services.map((service) => (
        <form key={service.id} onSubmit={(e) => handleSubmit(e, service.id)}>
          <h2>{service.service_type}</h2>
          <p>Price: ${service.price}</p>
          <textarea
            value={formData[service.id] || ""}
            onChange={(e) => handleChange(e, service.id)}
          />
          <button type="submit">Update Description</button>
        </form>
      ))}
    </div>
  );
};

export default AdminServices;
