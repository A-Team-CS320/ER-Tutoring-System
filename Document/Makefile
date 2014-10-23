TARGET=srs
FIG=
INCLUDES=*.tex
PDFFIG=figs/*.pdf
WPDFFIG = $(wildcard $(PDFFIG))
PDFTOPSFIG = $(WPDFFIG:.pdf=.ps)

PDFTOPS=pdftops

default: $(TARGET).pdf
pdf: $(TARGET).pdf
ps: $(TARGET).ps
dvi: $(TARGET).dvi

$(TARGET).pdf: $(TARGET).tex $(INCLUDES) 

$(TARGET).dvi: $(TARGET).tex $(INCLUDES) $(PDFTOPSFIG)

%.pdf : %.tex
	pdflatex $<
	pdflatex $<

%.dvi: %.tex 
	latex $<
	latex $<

%.ps: %.dvi
	dvips -P cmz -t letter $< -o $@

%.ps : %.pdf
	$(PDFTOPS) $<

clean:
	rm -f *.lof *.aux *.log *.toc *.lot *.bbl *.blg *.plg *.dvi *.bak *.out

CLEAN: clean
	rm -f $(TARGET).dvi
	rm -f $(TARGET).ps
	rm -f $(TARGET).pdf
	rm -f $(PDFTOPSFIG)
