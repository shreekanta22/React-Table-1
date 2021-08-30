import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS=
[
  {
      Header:'id',
      Footer:'id',
      accessor:'id',
      Filter: ColumnFilter,
      disableFilters:true
  },
  {
      Header:'First Name',
      Footer:'First Name',
      accessor:'first_name',
      Filter: ColumnFilter
  },
  {
      Header:'Last Name',
      Footer:'Last Name',
      accessor:'last_name',
      Filter: ColumnFilter
  },
  {
      Header:'Date of Birth',
      Footer:'Date of Birth',
      accessor:'date-of-birth',
      Filter: ColumnFilter
  },
  {
      Header:'Country',
      Footer:'Country',
      accessor:'country',
      Filter: ColumnFilter
  },
  {
      Header:'Phone',
      Footer:'Phone',
      accessor:'Phone',
      Filter: ColumnFilter,
      disableFilters:true
  }
]

export const GroupedColums=[
    {    
      Header:'Sl.No',
      Footer:'',
      columns:[{
      Header:'id',
      Footer:'id',
      accessor:'id'
  }
]
    },
    {
      Header:'Name',
      Footer:'',
      columns:[ {
      Header:'First Name',
      Footer:'First Name',
      accessor:'first_name'
  },
  {
      Header:'Last Name',
      Footer:'Last Name',
      accessor:'last_name'
  },
   ]
  },
    {
        Header:'Info',
        Footer:'',
        columns:[
            {
      Header:'Date of Birth',
      Footer:'Date of Birth',
      accessor:'date-of-birth'
  },
  {
      Header:'Country',
      Footer:'Country',
      accessor:'country'
  },
  {
      Header:'Phone',
      Footer:'Phone',
      accessor:'Phone'
  }
]
    }
]