using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schoolManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminController : ControllerBase
    {
        stateMaster_tableDB stateObj = new();
        cityMaster_tableDB cityObj = new();
        categoryMaster_tableDB ctgObj = new();
        mediumMaster_tableDB mediumObj = new();
        standardMaster_tableDB stdObj = new();
        divisionMaster_tableDB divObj = new();

        [HttpGet("stateList")]
        public JsonResult stateList()
        {

            List<stateMaster_tableEntities> states = stateObj.OnGetListdt();

            if (states.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = states });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("cityList/{stateId}")]
        public JsonResult cityList(int stateId)
        {

            List<cityMaster_tableEntities> cities = cityObj.OnGetListdt(stateId);

            if (cities.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = cities });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("categoryList")]
        public JsonResult categoryList()
        {

            List<categoryMaster_tableEntities> categories = ctgObj.OnGetListdt();

            if (categories.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = categories });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("mediumList")]
        public JsonResult mediumList()
        {

            List<mediumMaster_tableEntities> mediums = mediumObj.OnGetListdt();

            if (mediums.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = mediums });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("standardList")]
        public JsonResult standardList()
        {

            List<standardMaster_tableEntities> stds = stdObj.OnGetListdt();

            if (stds.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = stds });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("divisionList")]
        public JsonResult divisionList()
        {

            List<divisionMaster_tableEntities> divs = divObj.OnGetListdt();

            if (divs.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = divs });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        //[HttpGet("subjectList")]
        //public JsonResult subjectList()
        //{

        //    List<divisionMaster_tableEntities> divs = divObj.OnGetListdt();

        //    if (divs.Count != 0)
        //    {
        //        return new JsonResult(new { result = "success", message = "Data Found", data = divs });
        //    }
        //    else
        //    {
        //        return new JsonResult(new { result = "failure", message = "Data Not Found" });
        //    }
        //}

    }
}
