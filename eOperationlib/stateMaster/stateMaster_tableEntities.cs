using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class stateMaster_tableEntities
    {
        private int stateIdPk = 0;
        private string stateName = "";

        public int StateIdPk { get => stateIdPk; set => stateIdPk = value; }
        public string StateName { get => stateName; set => stateName = value; }
    }

