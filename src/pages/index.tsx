import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { FactorSelect } from "../components/FactorSelect"
import { GOESelect } from "../components/GOESelect"
import { PCSSelect } from "../components/PCSSelect"
import { Select } from "../components/Select"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>
        <TextInput />
      </Title>

      <Subtitle>
        <div>
          <Select>
            <option value="">MEN SHORT PROGRAM </option>
            <option value="">MEN FREE SKATING</option>
            <option value="">LADIES SHORT PROGRAM</option>
            <option value="">LADIES FREE SKATING</option>
          </Select>
        </div>
        <div>JUDGES DETAILS PER SKATER</div>
      </Subtitle>

      <Frame>
        <Table>
          <Thead>
            <Tr>
              <Th style={{ width: "4rem" }}>Rank</Th>
              <Th>Name</Th>
              <Th style={{ width: "4rem", textAlign: "right" }}>Nation</Th>
              <Th style={{ width: "6rem", textAlign: "right" }}>
                Starting Number
              </Th>
              <Th style={{ width: "6rem", textAlign: "right" }}>
                Total Segment Score
              </Th>
              <Th style={{ width: "6rem", textAlign: "right" }}>
                Total Element Score
              </Th>
              <Th style={{ width: "12rem", textAlign: "right" }}>
                Total
                <br />
                Program Component Score (factored)
              </Th>
              <Th style={{ width: "7rem", textAlign: "right" }}>
                Total Deductions
              </Th>
            </Tr>
          </Thead>
          <Tbody style={{ fontWeight: "bold" }}>
            <Tr>
              <Td style={{ textAlign: "right" }}>
                <NumberInput min={1} />
              </Td>
              <Td>
                <TextInput />
              </Td>
              <Td>
                <TextInput />
              </Td>
              <Td style={{ textAlign: "right" }}>
                <NumberInput min={1} />
              </Td>
              <Td style={{ textAlign: "right" }}>0</Td>
              <Td style={{ textAlign: "right" }}>0</Td>
              <Td style={{ textAlign: "right" }}>0</Td>
              <Td style={{ textAlign: "right" }}>0</Td>
            </Tr>
          </Tbody>
        </Table>
      </Frame>

      <Frame>
        <Table>
          <Thead>
            <Tr>
              <Th style={{ width: "1.5rem" }}>#</Th>
              <Th style={{ width: "20rem" }}>
                Executed
                <br />
                Elements
              </Th>
              <Th style={{ width: "1rem" }}>
                <div style={{ transform: "rotate(-90deg)" }}>Info</div>
              </Th>
              <Th style={{ width: "4rem" }}>Base Value</Th>
              <Th style={{ width: "1rem" }}>x</Th>
              <Th style={{ width: "4rem" }}>GOE</Th>
              <Th></Th>
              <Th style={{ textAlign: "center" }}>J1</Th>
              <Th style={{ textAlign: "center" }}>J2</Th>
              <Th style={{ textAlign: "center" }}>J3</Th>
              <Th style={{ textAlign: "center" }}>J4</Th>
              <Th style={{ textAlign: "center" }}>J5</Th>
              <Th style={{ textAlign: "center" }}>J6</Th>
              <Th style={{ textAlign: "center" }}>J7</Th>
              <Th style={{ textAlign: "center" }}>J8</Th>
              <Th style={{ textAlign: "center" }}>J9</Th>
              <Th></Th>
              <Th style={{ width: "2.5rem" }}>Ref</Th>
              <Th style={{ width: "6rem", textAlign: "center" }}>
                Scores of Panel
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td style={{ textAlign: "right" }}>1</Td>
              <Td>
                <TextInput />
              </Td>
              <Td></Td>
              <Td style={{ textAlign: "right" }}>8.50</Td>
              <Td>x</Td>
              <Td style={{ textAlign: "right" }}>2.50</Td>
              <Td></Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <GOESelect />
              </Td>
              <Td></Td>
              <Td></Td>
              <Td style={{ textAlign: "right" }}>11.50</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td style={{ textAlign: "right", fontWeight: "bold" }}>38.23</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td style={{ textAlign: "right", fontWeight: "bold" }}>40.26</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td style={{ fontWeight: "bold" }} colSpan={4}>
                Program Components
              </Td>
              <Td style={{ textAlign: "right" }}>Factor</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td colSpan={4}>Skating Skills</Td>
              <Td>
                <FactorSelect />
              </Td>
              <Td></Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td style={{ textAlign: "center" }}>
                <PCSSelect />
              </Td>
              <Td></Td>
              <Td></Td>
              <Td style={{ textAlign: "right" }}>8.54</Td>
            </Tr>
            <Tr></Tr>
          </Tbody>
        </Table>
      </Frame>

      <Frame>
        <Table>
          <Tbody>
            <Tr>
              <Td style={{ width: "1.5rem" }}></Td>
              <Td style={{ width: "8rem", fontWeight: "bold" }}>Deductions</Td>
              <Td style={{ textAlign: "right" }}>Falls: -2.00 (2)</Td>
              <Td style={{ textAlign: "right" }}>Time violation: -1.00</Td>
              <Td style={{ textAlign: "right" }}></Td>
              <Td
                style={{
                  width: "6rem",
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                -3.00
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Frame>
    </>
  )
}

export default Home

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
`

const Subtitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: bold;
  display: flex;

  > :nth-child(1) {
    width: 30%;
  }
`

const Frame = styled.div`
  border: solid 2px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  & + & {
    margin-top: 1rem;
  }
`

const Table = styled.table`
  border-spacing: 1rem 0.25rem;
  table-layout: fixed;
  width: 100%;
`

const Thead = styled.thead``

const Tbody = styled.tbody``

const Tr = styled.tr``

const Th = styled.th`
  font-weight: bold;
  padding-bottom: 0.5rem;
`

const Td = styled.td``

const NumberInput = styled.input.attrs({ type: "number" })`
  width: 100%;
`

const TextInput = styled.input.attrs({ type: "text" })`
  width: 100%;
`
