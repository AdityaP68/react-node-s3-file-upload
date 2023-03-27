import { useState } from "react";
import axios from "axios";

const useMutation = ({ url, method = "POST" }) => {
  const [state, setState] = useState({
    isLoading: false,
    error: "",
  });

  const fn = async (data) => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    axios({
      method: method,
      url: url,
      data: data,
      headers: {'x-user-id': 1234}
    })
      .then(() => {
        setState({ isLoading: false, error: "" });
      })
      .catch((e) => {
        console.log(e);
        setState({ isLoading: false, error: e.message });
      });
  };

  return { mutate: fn, ...state  };
};

export default useMutation;
