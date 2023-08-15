import axios from "axios";

function tokenProvider(auth) {
    return {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }
  }