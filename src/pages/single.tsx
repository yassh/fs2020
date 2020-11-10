import React, { useMemo } from "react"
import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { GoeSelect } from "../single/components/GoeSelect"
import { PcsSelect } from "../single/components/PcsSelect"
import { useData, Data } from "../single/hooks/useData"
import { segmentToFactor } from "../single/utils/segmentToFactor"
import { calcPcsTrimmedMean } from "../single/utils/calcPcsTrimmedMean"
import { getBaseValueOfElement } from "../single/utils/getBaseValueOfElement"
import { useUi } from "../single/hooks/useUi"
import {
  SegmentSelect,
  options as segmentOption,
} from "../single/components/SegmentSelect"

const Page: NextPage = () => {
  const {
    data,
    setTitle,
    setSegment,
    setElementAbbr,
    setElementX,
    setElementGoe,
    setPcs,
  } = useData()

  const { ui, setPreview } = useUi()

  const factor = useMemo(() => segmentToFactor(data.segment), [data.segment])
  const factorStr = useMemo(() => factor.toFixed(2), [factor])

  const [skatingSkills, skatingSkillsStr] = useMemo(
    () => calcPcsTrimmedMean(data.pc.skatingSkills),
    [data.pc.skatingSkills],
  )

  const [transitions, transitionsStr] = useMemo(
    () => calcPcsTrimmedMean(data.pc.transitions),
    [data.pc.transitions],
  )

  const pcs = useMemo(() => (skatingSkills ?? 0) + (transitions ?? 0), [
    skatingSkills,
    transitions,
  ])
  const pcsStr = useMemo(() => (pcs / 100).toFixed(2), [pcs])

  console.log(data)

  return (
    <>
      <Head>
        <title>2020–2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <div>2020–2021</div>
        <button onClick={() => setPreview(!ui.preview)}>
          {ui.preview ? "📝" : "👁️"}
        </button>
      </Header>

      <Title>
        {ui.preview ? (
          data.title
        ) : (
          <TextInput
            value={data.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
      </Title>

      <Subtitle>
        <div>
          {ui.preview ? (
            segmentOption.find((option) => option.value === data.segment)
              ?.label ?? ""
          ) : (
            <SegmentSelect
              value={data.segment}
              onChange={(e) => setSegment(e.target.value as Data["segment"])}
            />
          )}
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
              <Td style={{ textAlign: "right" }}>{pcsStr}</Td>
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
            {data.ee.map((element, index) => {
              const number = index + 1

              return (
                <Tr>
                  <Td style={{ textAlign: "right" }}>{number}</Td>
                  <Td>
                    <TextInput
                      value={element.abbr}
                      onChange={(e) => setElementAbbr(e.target.value, index)}
                    />
                  </Td>
                  <Td></Td>
                  <Td style={{ textAlign: "right" }}>
                    {getBaseValueOfElement(element.abbr, element.x)}
                  </Td>
                  <Td>
                    <Checkbox
                      checked={element.x}
                      onChange={(e) => setElementX(e.target.checked, index)}
                    />
                  </Td>
                  <Td style={{ textAlign: "right" }}>2.50</Td>
                  <Td></Td>
                  {element.goe.map((value, judge) => (
                    <Td style={{ textAlign: "center" }}>
                      <GoeSelect
                        value={value}
                        onChange={(value) => setElementGoe(value, index, judge)}
                      />
                    </Td>
                  ))}
                  <Td></Td>
                  <Td></Td>
                  <Td style={{ textAlign: "right" }}>11.50</Td>
                </Tr>
              )
            })}
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
              <Td style={{ textAlign: "right" }}>{factorStr}</Td>
              <Td></Td>
              {data.pc.skatingSkills.map((value, index) => (
                <Td style={{ textAlign: "center" }}>
                  <PcsSelect
                    value={value}
                    onChange={(value) => setPcs("skatingSkills", value, index)}
                  />
                </Td>
              ))}
              <Td></Td>
              <Td></Td>
              <Td style={{ textAlign: "right" }}>{skatingSkillsStr}</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td colSpan={4}>Transitions</Td>
              <Td style={{ textAlign: "right" }}>{factorStr}</Td>
              <Td></Td>
              {data.pc.transitions.map((value, index) => (
                <Td style={{ textAlign: "center" }}>
                  <PcsSelect
                    value={value}
                    onChange={(value) => setPcs("transitions", value, index)}
                  />
                </Td>
              ))}
              <Td></Td>
              <Td></Td>
              <Td style={{ textAlign: "right" }}>{transitionsStr}</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td style={{ fontWeight: "bold" }} colSpan={4}>
                Judges Total Program Component Score (factored)
              </Td>
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
              <Td style={{ fontWeight: "bold", textAlign: "right" }}>
                {pcsStr}
              </Td>
            </Tr>
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

export default Page

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

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

const Checkbox = styled.input.attrs({ type: "checkbox" })``
