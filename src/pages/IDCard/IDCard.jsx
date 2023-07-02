import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Search from "../../components/common/Search";
import Title from "../../components/common/Title";

const IDCard = () => {
  // const [data, setData] = useState({ rows: [], count: 0 });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const p = query.get("p") || 1;
  const q = query.get("q") || "";
  const sortBy = query.get("sortBy") || "id";
  const sortType = query.get("sortType") || "DESC";

  const handleSearch = (keyword) => {
    navigate(`?p=${p}&q=${keyword}`);
  };

  const handlePageChange = (page) => {
    navigate(`?p=${page}&q=${q}&sortBy=${sortBy}&sortType=${sortType}`);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const params = {
  //       limit: 15,
  //       p: p,
  //       sortBy: sortBy,
  //       sortType: sortType,
  //     };
  //     try {
  //       const response = await accountApi.search({
  //         ...params,
  //         q: q,
  //       });
  //       setData(response.data);
  //       // console.log(response.data);
  //     } catch (error) {}
  //   };
  //   fetchData();
  // }, [p, q]);
  // console.log(q);

  return (
    <section className="userpage">
      <Title title="Mã thẻ" button="Thêm mã thẻ" path="/id-card">
        <Search onSearch={handleSearch} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Mã thẻ</TableCell>
                <TableCell align="center">Ngày tạo</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">1</TableCell>

                <TableCell align="center">123</TableCell>
                <TableCell align="center">12/05/2023</TableCell>
                <TableCell align="center">
                  <>
                    <IconButton
                      LinkComponent={Link}
                      to={`/idcard/edit/`}
                      onClick={() => {
                        dispatch();
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* {data?.count > 0 && (
          <Pagination
            count={Math.ceil(data.count / 5)}
            shape="rounded"
            onChange={(e, page) => {
              handlePageChange(page);
            }}
            sx={{
              marginTop: "24px",
              ul: { justifyContent: "center" },
            }}
          />
        )} */}
      </Title>
    </section>
  );
};

export default IDCard;
