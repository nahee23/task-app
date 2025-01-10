import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

export default function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //target 객체 안의 name, value 가져옴
    setTaskData({ ...taskData, [name]: value });
    // e.target의 태그의 name과 value를 추출하여 taskData의 상태를 업데이트합니다.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task.trim().length > 0) {
      setTasks((prev) => {
        return [...prev, taskData];
      });

      setTaskData({ task: "", status: "todo", tags: [] });
      //taskData를 tasks에 추가하고 taskData를 초기화합니다.
    } else {
      alert("할일을 입력하세요");
    }
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData({ ...taskData, tags: filterTags });
    } else {
      setTaskData({ ...taskData, tags: [...taskData.tags, tag] });
    }
  };
  const checkTag = (tag) => {
    //tag가 현재 선택한 태그들에 있으면 true 없으면 false
    //some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
    return taskData.tags.some((item) => item === tag);
  };
  //console.log(taskData.tags);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          className="task_input"
          placeholder="할일을 입력하세요"
          onChange={handleChange}
          value={taskData.task}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="REACT"
              selectTag={selectTag}
              selected={checkTag("REACT")}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="task_status"
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
            <button className="task_submit">+ 추가</button>
          </div>
        </div>
      </form>
    </header>
  );
}
