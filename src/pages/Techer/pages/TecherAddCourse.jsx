import { useState } from "react";
import AddCoursDialog from "../components/AddCourse";
import LayoutTecher from "../components/LayoutTecher";
import { useHeaders } from "../../../hooks/useHeaders";
import { useGetCourseByIdQuery, useGetCoursesNameWhenBelongToTeacherQuery } from "../../../store/RtkSlices/coursesSlice";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import ShowCurriculum from "../components/ShowCurriculum";

function TecherAddCourse() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const headers = useHeaders();
  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);

    const selectedCourse = dataName.find((option) => option.name === newValue);
    if (selectedCourse) {
      setSelectedOptionId(selectedCourse.id);
    }
  };
  const { data: dataName , isLoading } = useGetCoursesNameWhenBelongToTeacherQuery({
    headers,
  });
      const { data } = useGetCourseByIdQuery({ id : selectedOptionId }) 
  return (
    <div>
      <LayoutTecher
        pages={
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              <h1>الدروس</h1>
              <Autocomplete
                freeSolo
                disabled={isLoading}
                id="combo-box-demo"
                value={selectedOption}
                options={dataName?.map((option) => option.name)}
                onChange={handleOptionChange}
                sx={{minWidth :"260px"}}
                renderInput={(params) => (
                  <TextField
                    dir="rtl"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment className="me-2" position="end">
                          {" "}
                          الكورس
                          <TitleIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <AddCoursDialog />
            </div>
                    <ShowCurriculum data={data?.curriculum} />
          </div>
        }
      />
    </div>
  );
}

export default TecherAddCourse;
