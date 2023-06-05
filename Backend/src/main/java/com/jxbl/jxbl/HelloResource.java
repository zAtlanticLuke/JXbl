package com.jxbl.jxbl;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

@Path("/info")
public class HelloResource
{
    @GET
    @Produces("text/plain")
    public String info()
    {
        return "JXbl, Version 0.1, Status=Running";
    }
}