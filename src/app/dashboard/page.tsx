"use client";
import { useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Tabs } from "@/components/navigation/Tabs";
import { Table } from "@/components/data-display/Table";
import { MenuIcon, SunIcon, UserIcon } from "lucide-react";
import { Pagination } from "@/components/navigation/Pagination";
import { MobileSidebar } from "@/components/navigation/sidebar/MobileSidebar";
import { DesktopSidebar } from "@/components/navigation/sidebar/DesktopSidebar";

type QuizStatus = "all" | "completed" | "upcoming" | "missed";

const items: { label: string; value: QuizStatus }[] = [
  { label: "All", value: "all" },
  { label: "Missed", value: "missed" },
  { label: "Completed", value: "completed" },
  { label: "Upcoming", value: "upcoming" },
];

const data = [{ id: "1", name: "John Doe", email: "john.doe@gmail.com" }];

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [rpp, setRpp] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [selectedStatus, setSelectedStatus] = useState<QuizStatus>("all");

  const columns = useMemo<ColumnDef<{ name: string; email: string }>[]>(
    () => [
      {
        accessorKey: "name",
        header: "First Name",
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: (info) => <i>{info.getValue<string>()}</i>,
      },
    ],
    [],
  );

  return (
    <div className="flex min-h-svh">
      <DesktopSidebar />
      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="flex-1 flex flex-col">
        <header className="p-5 bg-light flex justify-between border-b border-color">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden hover:text-gray-300"
          >
            <MenuIcon className="size-8" />
          </button>

          <div className="flex flex-1 justify-end gap-3">
            <button className="p-2 border border-gray-400 rounded-full cursor-pointer hover:text-gray-300">
              <SunIcon />
            </button>

            <button className="p-2 border border-gray-400 rounded-full cursor-pointer hover:text-gray-300">
              <UserIcon />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 flex flex-col gap-4">
          <Tabs
            items={items}
            value={selectedStatus}
            onChange={setSelectedStatus}
          />

          <div className="w-full flex flex-col items-center bg-light p-6 rounded-lg">
            <Table data={data} columns={columns} isLoading={false} />

            <Pagination
              isLoading={false}
              page={page}
              rpp={rpp}
              total={total}
              totalPages={totalPages}
              onPageChange={setPage}
              onRppChange={setRpp}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
