import {
  Box,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  LinearProgress,
} from '@mui/material';
import React, { useCallback, useState, memo } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import './Dropzone.css';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';

type DropZoneProps = {
  fileTypes: string[];
  fileSize?: number;
  backgroundColor?: string;
};

function DropZoneComponent(props: DropZoneProps) {
  const [file, setFile] = useState<any>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [intervalId, setIntervalId] = useState<any>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isProgressComplete, setIsProgressComplete] = useState(false);
  const maxSize = props.fileSize;

  const onDrop = useCallback((acceptedFiles: any) => {
    setIsProgressComplete(false);
    if (
      acceptedFiles &&
      Array.isArray(acceptedFiles) &&
      acceptedFiles.length > 0
    ) {
      setFile(acceptedFiles[0]);
      setIsFileSelected(true);
    }
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          setIsProgressComplete(true);
          clearInterval(timer);
          setProgress(0);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    setIntervalId(timer);
  }, []);

  const handleDelete = () => {
    setFile(null);
    setIsFileSelected(false);
    setIsProgressComplete(false);
  };
  const { getRootProps, getInputProps, open, isDragReject, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        'image/*,application/*,video/*,text/*': props.fileTypes,
      },
      maxSize,
      noClick: true,
      multiple: false,
    });
  return (
    <div className="p-2">
      <Card
        elevation={3}
        sx={{ width: '70vw', height: '80vh', margin: '2rem auto' }}
      >
        <p className="text1">Drag and Drop files here...</p>
        <div
          {...getRootProps()}
          className="Dropzone"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <input {...getInputProps()} />
          {!file && (
            <>
              <UploadFileIcon
                sx={{
                  fontSize: 100,
                  padding: '1rem',
                  display: 'flex',
                  position: 'relative',
                  top: '25%',
                  margin: 'auto',
                  cursor: 'pointer',
                }}
                onClick={open}
              />
              {fileRejections?.length > 0 ? (
                <p
                  className="text1"
                  style={{ color: 'red', position: 'relative', top: '4rem' }}
                >
                  file size is too large... or it only supports these{' '}
                  {props.fileTypes.toString()}{' '}
                </p>
              ) : (
                <p
                  style={{ position: 'relative', top: '4rem' }}
                  className="text1"
                >
                  {' '}
                  supported file formats are {props.fileTypes.toString()}
                </p>
              )}
            </>
          )}
          {file && (
            <>
              <div style={{ justifyContent: 'space-around', display: 'flex' }}>
                <p className="text">
                  {file.name} -{file.size} bytes
                </p>
                <IconButton disabled={!isProgressComplete}>
                  <DeleteIcon
                    onClick={handleDelete}
                    sx={{ cursor: 'pointer', alignSelf: 'center' }}
                  />
                </IconButton>
              </div>

              <Grid item justifyContent="center">
                {isFileSelected && !isProgressComplete && (
                  // <CircularProgress variant="determinate" style={{ margin:'auto'}} value={progress} />
                  <Box
                    sx={{
                      position: 'relative',
                      left: '25vw',
                      display: 'inline-flex',
                    }}
                  >
                    <CircularProgress
                      size="25vh"
                      variant="determinate"
                      value={progress}
                    />
                  </Box>
                )}
              </Grid>
              {file?.type.split('/')[0] === 'image' &&
                isFileSelected &&
                isProgressComplete && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: 'auto',
                    }}
                    width="95%"
                    height="80%"
                  />
                )}
              {file?.type.split('/')[0] === 'video' &&
                isFileSelected &&
                isProgressComplete && (
                  <video
                    controls
                    src={URL.createObjectURL(file)}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: 'auto',
                      padding: '1rem',
                    }}
                    width="95%"
                    height="80%"
                  />
                )}
            </>
          )}
        </div>
      </Card>
    </div>
  );
}

export default memo(DropZoneComponent);
