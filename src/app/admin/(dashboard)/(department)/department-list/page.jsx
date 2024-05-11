"use client";
import { axiosApi } from "@/axiosApi";
import { HQAvatar } from "@/components";
import { Table } from "antd";
import React, { useEffect, useState } from "react";

const DepartmentList = () => {
  const [departmentList, setDepartmentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDepartmentList = async () => {
      try {
        setLoading(true);
        const response = await axiosApi({
          method: "get",
          url: `admin/viewAllDepart`,
        });
        setDepartmentList(response.data.data);
      } catch (error) {
        console.error("Error fetching department data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentList();
  }, []);

  console.log(departmentList);
  const departmentListColumns = [
    {
      title: "Avatar",
      dataIndex: "departImage",
      key: "departImage",
      render: (departImage) => <HQAvatar single img={departImage} size={20} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "RegisterDate",
      dataIndex: "currentDate",
      key: "currentDate",
      ellipsis: true,
    },
  ];
  return (
    <div>
      <Table
        columns={departmentListColumns}
        dataSource={departmentList}
        loading={loading}
        rowKey="_id"
      />
    </div>
  );
};

export default DepartmentList;
