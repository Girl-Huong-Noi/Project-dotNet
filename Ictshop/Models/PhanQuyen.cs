
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace Ictshop.Models
{

using System;
    using System.Collections.Generic;
    
public partial class PhanQuyen
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public PhanQuyen()
    {

        this.Nguoidungs = new HashSet<Nguoidung>();

    }


    public int IDQuyen { get; set; }

    public string TenQuyen { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<Nguoidung> Nguoidungs { get; set; }

}

}
