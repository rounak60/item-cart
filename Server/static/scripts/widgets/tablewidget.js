(function() {
  window.TableWidget = (function() {
    function TableWidget($ele, graphData) {
      this.$ele = $ele;
      this.graphData = graphData;
      this.onRender(this.graphData);
    }

    TableWidget.prototype.onRender = function() {
      var colors, data, entry, html, i, j, k, label, labels, len, len1, len2;
      data = this.graphData.data;
      labels = this.graphData.labels;
      colors = this.graphData.colors;
      html = '';
      html = "<table class=\"tablewidget\">\n    <thead>\n        <tr class=\"tablewidget-hdr-row\">";
      for (i = 0, len = labels.length; i < len; i++) {
        entry = labels[i];
        html += "<th>" + entry + "</th>";
      }
      html += "    </tr>\n</thead>\n<tbody>";
      for (j = 0, len1 = data.length; j < len1; j++) {
        entry = data[j];
        html += "<tr class=\"tablewidget-row\">";
        for (k = 0, len2 = labels.length; k < len2; k++) {
          label = labels[k];
          html += "<td>" + entry[label] + "</td>";
        }
        html += "</tr>";
      }
      html += "</tbody></table>";
      this.$widget = $(html);
      return this.$ele.html(html);
    };

    TableWidget.prototype.remove = function() {
      return this.$widget.remove();
    };

    TableWidget.prototype.update = function(graphData) {
      this.graphData = graphData;
      return this.onRender();
    };

    return TableWidget;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMvdGFibGV3aWRnZXQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQUEsRUFBTSxNQUFNLENBQUM7QUFDSSxJQUFBLHFCQUFDLElBQUQsRUFBTyxTQUFQLEdBQUE7QUFDVCxNQURVLElBQUMsQ0FBQSxPQUFELElBQ1YsQ0FBQTtBQUFBLE1BRGdCLElBQUMsQ0FBQSxZQUFELFNBQ2hCLENBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxRQUFELENBQVUsSUFBQyxDQUFBLFNBQVgsQ0FBQSxDQURTO0lBQUEsQ0FBYjs7QUFBQSwwQkFJQSxRQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ0wsVUFBQSxrRUFBQTtBQUFBLE1BQUEsSUFBQSxHQUFTLElBQUMsQ0FBQSxTQUFTLENBQUMsSUFBcEIsQ0FBQTtBQUFBLE1BQ0EsTUFBQSxHQUFTLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFEcEIsQ0FBQTtBQUFBLE1BRUEsTUFBQSxHQUFTLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFGcEIsQ0FBQTtBQUFBLE1BR0EsSUFBQSxHQUFTLEVBSFQsQ0FBQTtBQUFBLE1BS0EsSUFBQSxHQUFPLHdGQUxQLENBQUE7QUFXQSxXQUFBLHdDQUFBOzBCQUFBO0FBQ0ksUUFBQSxJQUFBLElBQVEsTUFBQSxHQUNFLEtBREYsR0FDUSxPQURoQixDQURKO0FBQUEsT0FYQTtBQUFBLE1BZ0JBLElBQUEsSUFBUSw4QkFoQlIsQ0FBQTtBQXNCQSxXQUFBLHdDQUFBO3dCQUFBO0FBQ0ksUUFBQSxJQUFBLElBQVEsZ0NBQVIsQ0FBQTtBQUNBLGFBQUEsMENBQUE7NEJBQUE7QUFDSSxVQUFBLElBQUEsSUFBUSxNQUFBLEdBQ0UsS0FBTSxDQUFBLEtBQUEsQ0FEUixHQUNlLE9BRHZCLENBREo7QUFBQSxTQURBO0FBQUEsUUFLQSxJQUFBLElBQVEsT0FMUixDQURKO0FBQUEsT0F0QkE7QUFBQSxNQThCQSxJQUFBLElBQVEsa0JBOUJSLENBQUE7QUFBQSxNQWdDQSxJQUFDLENBQUEsT0FBRCxHQUFXLENBQUEsQ0FBRSxJQUFGLENBaENYLENBQUE7YUFpQ0EsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsSUFBWCxFQWxDSztJQUFBLENBSlQsQ0FBQTs7QUFBQSwwQkF3Q0EsTUFBQSxHQUFTLFNBQUEsR0FBQTthQUNMLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBVCxDQUFBLEVBREs7SUFBQSxDQXhDVCxDQUFBOztBQUFBLDBCQTJDQSxNQUFBLEdBQVEsU0FBQyxTQUFELEdBQUE7QUFDSixNQURLLElBQUMsQ0FBQSxZQUFELFNBQ0wsQ0FBQTthQUFBLElBQUMsQ0FBQSxRQUFELENBQUEsRUFESTtJQUFBLENBM0NSLENBQUE7O3VCQUFBOztNQURKLENBQUE7QUFBQSIsImZpbGUiOiJ3aWRnZXRzL3RhYmxld2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyB3aW5kb3cuVGFibGVXaWRnZXRcbiAgICBjb25zdHJ1Y3RvcjogKEAkZWxlLEBncmFwaERhdGEpLT5cbiAgICAgICAgQG9uUmVuZGVyKEBncmFwaERhdGEpXG5cblxuICAgIG9uUmVuZGVyOigpLT5cbiAgICAgICAgZGF0YSAgID0gQGdyYXBoRGF0YS5kYXRhXG4gICAgICAgIGxhYmVscyA9IEBncmFwaERhdGEubGFiZWxzXG4gICAgICAgIGNvbG9ycyA9IEBncmFwaERhdGEuY29sb3JzXG4gICAgICAgIGh0bWwgICA9ICcnXG5cbiAgICAgICAgaHRtbCA9IFwiXCJcIlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGV3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxld2lkZ2V0LWhkci1yb3dcIj5cbiAgICAgICAgICAgICBcIlwiXCJcblxuICAgICAgICBmb3IgZW50cnkgaW4gbGFiZWxzXG4gICAgICAgICAgICBodG1sICs9IFwiXCJcIlxuICAgICAgICAgICAgICAgIDx0aD4je2VudHJ5fTwvdGg+XG4gICAgICAgICAgICBcIlwiXCJcblxuICAgICAgICBodG1sICs9IFwiXCJcIlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICBcIlwiXCJcblxuICAgICAgICBmb3IgZW50cnkgaW4gZGF0YVxuICAgICAgICAgICAgaHRtbCArPSBcIjx0ciBjbGFzcz1cXFwidGFibGV3aWRnZXQtcm93XFxcIj5cIlxuICAgICAgICAgICAgZm9yIGxhYmVsIGluIGxhYmVsc1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4je2VudHJ5W2xhYmVsXX08L3RkPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuICAgICAgICAgICAgaHRtbCArPSBcIjwvdHI+XCJcblxuICAgICAgICBodG1sICs9IFwiPC90Ym9keT48L3RhYmxlPlwiXG5cbiAgICAgICAgQCR3aWRnZXQgPSAkKGh0bWwpXG4gICAgICAgIEAkZWxlLmh0bWwoaHRtbClcblxuICAgIHJlbW92ZSA6IC0+XG4gICAgICAgIEAkd2lkZ2V0LnJlbW92ZSgpXG5cbiAgICB1cGRhdGU6IChAZ3JhcGhEYXRhKS0+XG4gICAgICAgIEBvblJlbmRlcigpXG4iXX0=