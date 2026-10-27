"use client";

import { useState, useEffect } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { IoPeopleOutline } from "react-icons/io5";

import jagents from "@/data/agents";
import iranstates from "@/data/states";
import { contains } from "@/components/helpers";
import * as ga from "@/lib/ga";
import TopEng from "@/components/topeng";

const MAX_AGENTS = 10; // تعداد محدود برای درج در JSON-LD

export default function AgentsClient() {
  const janomeagents = jagents;
  const allStates = iranstates;

  const [agents, setAgents] = useState([]);
  const [states, setStates] = useState([]);
  const [state, setState] = useState("تهران");
  const [all, setAll] = useState([]);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": janomeagents.slice(0, MAX_AGENTS).map(agent => ({
      "@type": "LocalBusiness",
      name: agent.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: agent.city,
        addressRegion: agent.state,
        streetAddress: agent.address,
        addressCountry: "IR",
      },
      ...(agent.phone?.[0] && { telephone: agent.phone[0].trim() }),
      ...(agent.mobile && { mobile: agent.mobile.trim() }),
    })),
  };

  useEffect(() => {
    const stateData = janomeagents.map(a => {
      return { state: a.state };
    });
    setAll(allStates.map(a => a.name));
    setStates(_.orderBy(_.uniqBy(stateData, "state"), ["state"]));
  }, []);

  useEffect(() => {
    const filtered = janomeagents.filter(ja => ja.state === state);
    const ordered = _.orderBy(filtered, ["city", "name"]);
    setAgents(ordered);
  }, [state]);

  const handleChange = e => {
    setState(e.target.value);
    ga.event({
      action: "agentSelect " + e.target.value,
      params: {
        search_term: e.target.value,
      },
    });
  };

  return (
    <>
      <TopEng pagetitle="نمایندگی های چرخ خیاطی ژانومه">
        <IoPeopleOutline size="2.0rem" className="mx-2" />
      </TopEng>

      <div className="main-backcolor agent-page min-vh-100 border p-5">
        <h5 className="text-center">استان مورد نظر را انتخاب کیند</h5>
        <div className="pb-3 mx-auto" style={{ width: "200px" }}>
          <select
            className="form-select text-center"
            aria-label="ُState Select"
            onChange={handleChange}
            value={state}
          >
            {states.map(s => (
              <option key={uuidv4()} value={s.state}>
                {s.state}
              </option>
            ))}
          </select>
        </div>{" "}
        <h2 className="py-2">نمایندگی های مجاز چرخ خیاطی ژانومه</h2>
        <table
          id="agents-table"
          className="table table-hover table-striped border"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">نام</th>
              <th scope="col">استان</th>
              <th scope="col">شهر</th>
              <th scope="col">آدرس</th>
              <th scope="col">تلفن</th>
              <th scope="col">موبایل</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => {
              return (
                <tr key={uuidv4()}>
                  <th
                    style={{
                      backgroundColor: "#fff !important",
                      zIndex: "1",
                    }}
                    scope="row"
                  >
                    {index + 1}
                  </th>
                  <td>{agent.name}</td>
                  <td>{agent.state}</td>
                  <td>{agent.city}</td>
                  <td>{agent.address}</td>
                  <td className="eng-text">
                    {agent.phone.map(ph => (
                      <span key={uuidv4()}>&nbsp;{ph}</span>
                    ))}
                  </td>
                  <td className="eng-text">{agent.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
}
