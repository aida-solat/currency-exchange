//currencyConverter.tsx
import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";
import { convertCurrencies, latestRates } from "../service/api";
import { useQuery } from "react-query";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { supportedCurrencies } from "../service/api";
import Symbols from "../reducers/appReducer";

function CurrencyConverter(props: any) {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const { data, isLoading, error } = useQuery(
    ["currency", fromCurrency, toCurrency, amount],
    () => convertCurrencies(fromCurrency, toCurrency, amount)
  );

  console.log(data, "data");

  //supportedCurrencies data
  const {
    status: status2,
    data: data2,
    isLoading: isLoading2,
  } = useQuery(`symbols`, () => supportedCurrencies());

  console.log("data2", data2.symbols);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleChangeFrom = (event: SelectChangeEvent) => {
    setFromCurrency(event.target.value as string);
  };

  const handleChangeTo = (event: SelectChangeEvent) => {
    setToCurrency(event.target.value as string);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleConvert = () => {
    if (data) {
      setExchangeRate(data.result);
      setResult(data.result * amount);
    }
  };

  const titleBold = {
    fontWeight: "bold",
  };

  useEffect(() => {
    if (data) {
      setExchangeRate(data?.result);
      setResult(data?.result * amount);
    }

    console.log(data, "data");
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container className='w-full flex bg-light' fluid>
        <Row>
          <Col>
            <Form.Text style={titleBold}>I want to convert</Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              id='standard-basic'
              label='Amount'
              variant='standard'
              onChange={handleAmountChange}
              value={amount}
            />
          </Col>

          <Col>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='demo-simple-select-standard-label'>
                From
              </InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                label='From'
                defaultValue='EUR'
                onChange={handleChangeFrom}
              >
                {}
              </Select>
              {data2.symbols.map((item: any, key: any) => {
                return (
                  <MenuItem key={key} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </FormControl>
          </Col>
          <Col>
            <a onClick={handleSwap}>
              <img
                src='compare_arrows_black.svg'
                style={{
                  backgroundColor: "#f1f1f1",
                  padding: "10px",
                }}
              />
            </a>
          </Col>
          <Col>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='demo-simple-select-standard-label'>To</InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                defaultValue={10}
                label='To'
              >
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>GBP</MenuItem>
                <MenuItem value={40}>INR</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col>
            <Button
              onChange={handleConvert}
              style={{ backgroundColor: "#009688" }}
              variant='contained'
            >
              Convert
            </Button>
          </Col>
        </Row>
        <Row>
          <span style={titleBold}>
            {amount}
            {fromCurrency} =
            <span style={titleBold}>
              {data?.result}
              {toCurrency}
            </span>
          </span>
        </Row>
        <Row>
          <Col>
            <Form.Text>1 EUR = 1.134 USD</Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Text>1 USD = 0.86785 EUR</Form.Text>
          </Col>
        </Row>
        <Row>
          <Form.Text>Exchange History</Form.Text>
        </Row>
        <Row>
          <Col>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='demo-simple-select-standard-label'>
                Duration
              </InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                label='duration'
                defaultValue={10}
              >
                <MenuItem value={10}>7 days</MenuItem>
                <MenuItem value={20}>14 days</MenuItem>
                <MenuItem value={30}>30 days</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
                defaultValue='table'
              >
                <FormControlLabel
                  value='table'
                  control={<Radio />}
                  label='Table'
                />
                <FormControlLabel
                  value='chart'
                  control={<Radio />}
                  label='Chart'
                />
              </RadioGroup>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 100 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align='left'>Exchange Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key='row'
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      row name
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      row name
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
          <Col>
            <TableContainer component={Paper}>
              <TableContainer sx={{ minWidth: 100 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Statics</TableCell>
                    <TableCell align='left'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key='row'
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      row name
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      row name
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const titleBold = {
  fontWeight: "bold",
  fontSize: "48px",
  FontFace: "Roboto",
  marginLeft: "10%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5%",
};

export default CurrencyConverter;
