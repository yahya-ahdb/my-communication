import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import EditCurriculumDialog from "./EditCurriculumDialog";
import EditIcon from "@mui/icons-material/Edit";
import { HTMLDisplay } from "../../../components/utils/HTMLDisplay";
import DeleteCurricum from "./DeleteCurricum";
import DeleteIcon from "@mui/icons-material/Delete";

function ShowCurriculum({ data }) {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [dataDilog, setDataDilog] = useState();

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };

  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap">
       {
              data?.length == 0 &&
              <h3 className="text-center fw-bold mt-5" >
                  Empty
              </h3>
            }
      {data?.map((item) => (
        <div
          key={item?.id}
          className="mt-2"
          style={{ maxWidth: "350px", minWidth: "280px" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <HTMLDisplay html={item?.description?.substring(0, 30)} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  setOpen(true);
                  setDataDilog(item);
                }}
              >
                <EditIcon />
                تعديل
              </Button>
              <div onClick={() => {}}>
                <Button
                  onClick={() => {
                    setOpenDelete(true), setDataDilog(item);
                  }}
                  color="warning"
                >
                  <DeleteIcon />
                  حذف
                </Button>
              </div>
            </CardActions>
            {open && (
              <EditCurriculumDialog
                dataDia={dataDilog}
                open={open}
                handleClose={handleClose}
              />
            )}
            {openDelete && (
              <DeleteCurricum
                dataDia={dataDilog}
                open={openDelete}
                handleClose={handleClose}
              />
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ShowCurriculum;
