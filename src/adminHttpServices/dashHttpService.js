import Swal from "sweetalert2";
import adminHttpService from "./adminHttpService";

// DASHBOARD

export async function GetState() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/getState`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function EditProfile(formData) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/editProfile`,
      formData
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

// GUIDES

export async function AllGuidesList() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/guideList`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function GuideDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/guideDetails/${id}`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ChangeGuideStatus(id) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/updateStatus/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Guide status changed",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function DeleteGuide(id) {
  try {
    const { data } = await adminHttpService.delete(
      `${process.env.REACT_APP_API}/api/admin/deteleGuide/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Guide deleted successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

// USER
export async function AllUsersList() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/userList`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function UserDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/userDetails/${id}`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ChangeUserStatus(id) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/checkStatus/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "User status changed",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function DeleteUser(id) {
  try {
    const { data } = await adminHttpService.delete(
      `${process.env.REACT_APP_API}/api/admin/deleteUser/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "User deleted successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function UpdateDetails(api, id, formData) {
  console.log(api, id);

  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/${api}/${id}`,
      formData
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

//  ACTIVITY

export async function GetAllActivity() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/activityList`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ActivityDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/activityDetails/${id}`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ChangeActivityStatus(id) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/updateActivity/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function DeleteActivity(id) {
  try {
    const { data } = await adminHttpService.delete(
      `${process.env.REACT_APP_API}/api/admin/deleteActivity/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function UpdateActivity(api, id, formData) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/${api}/${id}`,
      formData
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function CreateActivity(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_API}/api/admin/createActivity`,
      formData
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
// SUBACTIVITY
export async function CreateSubActivity(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_API}/api/admin/createSubActivity`,
      formData
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function GetAllSubActivity() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/subActivityList`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function SubActivityDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_API}/api/admin/subActivityDetails/${id}`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ChangeSubActivityStatus(id) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_API}/api/admin/updateSubactivityStatus/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function DeleteSubActivity(id) {
  try {
    const { data } = await adminHttpService.delete(
      `${process.env.REACT_APP_API}/api/admin/deleteSubActivity/${id}`
    );

    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
// export async function UpdateSubActivity(id, formData) {
//   try {
//     const { data } = await adminHttpService.put(
//       `${process.env.REACT_APP_API}/api/admin/editSubActivity/${id}`,
//       formData
//     );

//     if (!data?.error) {
//       Swal.fire({
//         toast: true,
//         icon: "success",
//         position: "top-end",
//         title: data?.message,
//         showConfirmButton: false,
//         timerProgressBar: true,
//         timer: 3000,
//       });
//       return { data };
//     } else
//       Swal.fire({
//         toast: true,
//         icon: "error",
//         position: "top-end",
//         title: data.message,
//         showConfirmButton: false,
//         timerProgressBar: true,
//         timer: 3000,
//       });
//   } catch (error) {
//     if (error.response)
//       Swal.fire({
//         toast: true,
//         icon: "error",
//         position: "top-end",
//         title: "error",
//         showConfirmButton: false,
//         timerProgressBar: true,
//         timer: 3000,
//       });
//     return { error };
//   }
// }
