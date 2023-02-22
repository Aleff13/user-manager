import React, { useEffect, useState } from "react";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Typography } from "@mui/material";
import { MarkdownIndex } from "../services/constants";
import MarkdownService from "../services/markdown";

interface MardownProps {
  content: MarkdownIndex;
}

const Markdown = ({ content }: MardownProps) => {
  const [docs, setDocs] = useState<string>("");
  const docsImport = MarkdownService.getDocs();

  useEffect(() => {
    const indexDoc = MarkdownService.getIndex(content);
    fetch(docsImport[indexDoc]).then(async (res) => {
      let docToAdd = await res.text();
      setDocs(docToAdd);
    });
  });

  return (
    <Container sx={{ overflowWrap: "break-word" }}>
      <Typography>
        <ReactMarkdown>{docs}</ReactMarkdown>
      </Typography>
    </Container>
  );
};

export default Markdown;
