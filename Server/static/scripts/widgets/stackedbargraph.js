(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.StackedBarGraph = (function(superClass) {
    extend(StackedBarGraph, superClass);

    StackedBarGraph.prototype.colors = ['#249eb2', '#f45858', '#ec008c', '#249eb2', '#05DAD7', '#7CEF78'];

    function StackedBarGraph($ele, graphData) {
      this.$ele = $ele;
      this.graphData = graphData;
      this.redrawOnResize = true;
      this.margin = {
        left: 17,
        right: 15,
        top: 15,
        bottom: 19
      };
      StackedBarGraph.__super__.constructor.call(this, this.$ele, this.graphData);
    }

    StackedBarGraph.prototype.onRender = function() {
      var barWidth, colorScale, grpLabelEles, grpdGraphData, height, hoverLabel, legendHeight, len, rect, values, width, xBar, xDomain, xScale, yAxis, yAxisWidth, yDomain, yDomainMax, yScale;
      colorScale = d3.scale.ordinal().range(this.graphData.colors || this.colors);
      legendHeight = this.drawLegends(this.graphData.labels, this.colors);
      height = this.height - legendHeight - 20;
      yScale = d3.scale.linear().range([height, 0]);
      xScale = d3.scale.linear();
      colorScale = d3.scale.ordinal().range(this.graphData.colors || this.colors);
      hoverLabel = d3.scale.ordinal().range(this.graphData.labels);
      grpdGraphData = this.graphData.labels.map((function(_this) {
        return function(n) {
          return _this.graphData.data.map(function(d, i) {
            return {
              x: i,
              y: +d[n],
              y0: 0
            };
          });
        };
      })(this));
      d3.layout.stack()(grpdGraphData);
      yDomainMax = d3.max(this.graphData.data, function(d) {
        var k, sum, v;
        sum = 0;
        for (k in d) {
          v = d[k];
          if (k !== 'label') {
            sum += v;
          }
        }
        return sum;
      });
      yDomain = [0, yDomainMax];
      xDomain = [0, this.graphData.data.length - 1];
      xScale.domain(xDomain);
      yScale.domain(yDomain);
      yAxis = d3.svg.axis().scale(yScale).tickSize(-this.width, 0, 0).ticks(5).tickFormat(function(d, index) {
        if (index === 0) {
          return '';
        } else {
          return d;
        }
      }).orient('left');
      this.graphGrp.append('g').attr('class', 'yaxis').call(yAxis);
      yAxisWidth = 0;
      this.graphGrp.select('g.yaxis').selectAll('.tick').select('text').each(function(d) {
        return yAxisWidth = yAxisWidth < this.getBBox().width ? this.getBBox().width : yAxisWidth;
      }).attr({
        x: yAxisWidth
      });
      width = this.width - yAxisWidth;
      len = this.graphData.data.length;
      xScale.range([width / len / 2, width - width / len / 2]);
      xBar = d3.svg.axis().scale(xScale).ticks(this.graphData.data.length - 1).tickSize(height, 0, 0).tickFormat((function(_this) {
        return function(d, index) {
          return _this.graphData.data[index].label;
        };
      })(this)).orient('bottom');
      this.graphGrp.select('g.yaxis').selectAll('.tick').select('line').attr({
        transform: 'translate(' + yAxisWidth + ',0)',
        x2: width
      });
      this.graphGrp.append('g').attr('class', 'xaxis').attr('transform', 'translate(' + yAxisWidth + ',0)').call(xBar);
      grpLabelEles = this.graphGrp.selectAll('.valgroup').data(grpdGraphData).enter().append('g').attr('class', 'valgroup').style('fill', function(d, i) {
        return colorScale(i);
      }).attr('class', function(d, i) {
        return hoverLabel(i);
      });
      barWidth = Math.min(width / len * .6, 120);
      rect = grpLabelEles.selectAll('rect').data(Object).enter().append('svg:rect').attr('x', (function(_this) {
        return function(d, i) {
          return xScale(i) + yAxisWidth - barWidth / 2;
        };
      })(this)).attr('y', (function(_this) {
        return function(d) {
          return yScale(d.y0 + d.y);
        };
      })(this)).attr('height', (function(_this) {
        return function(d) {
          return yScale(0) - yScale(d.y);
        };
      })(this)).attr('width', barWidth);
      values = grpLabelEles.selectAll('text').data(Object).enter().append('svg:text').attr({
        'x': (function(_this) {
          return function(d, i) {
            return xScale(i) + yAxisWidth;
          };
        })(this),
        'y': (function(_this) {
          return function(d) {
            return yScale(d.y0 + d.y) + 3;
          };
        })(this),
        'class': 'graph-stacked-value'
      }).text((function(_this) {
        return function(d, i) {
          if (d.y > yDomainMax * 0.1) {
            return d.y;
          }
          return '';
        };
      })(this));
    };

    return StackedBarGraph;

  })(Graph);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMvc3RhY2tlZGJhcmdyYXBoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7K0JBQUE7O0FBQUEsRUFBTSxNQUFNLENBQUM7QUFDVCx1Q0FBQSxDQUFBOztBQUFBLDhCQUFBLE1BQUEsR0FBUyxDQUNMLFNBREssRUFFTCxTQUZLLEVBR0wsU0FISyxFQUlMLFNBSkssRUFLTCxTQUxLLEVBTUwsU0FOSyxDQUFULENBQUE7O0FBU1ksSUFBQSx5QkFBQyxJQUFELEVBQU8sU0FBUCxHQUFBO0FBRVIsTUFGUyxJQUFDLENBQUEsT0FBRCxJQUVULENBQUE7QUFBQSxNQUZlLElBQUMsQ0FBQSxZQUFELFNBRWYsQ0FBQTtBQUFBLE1BQUEsSUFBQyxDQUFBLGNBQUQsR0FBa0IsSUFBbEIsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLE1BQUQsR0FBVztBQUFBLFFBQ1AsSUFBQSxFQUFTLEVBREY7QUFBQSxRQUVQLEtBQUEsRUFBUyxFQUZGO0FBQUEsUUFHUCxHQUFBLEVBQVMsRUFIRjtBQUFBLFFBSVAsTUFBQSxFQUFTLEVBSkY7T0FGWCxDQUFBO0FBQUEsTUFVQSxpREFBTSxJQUFDLENBQUEsSUFBUCxFQUFZLElBQUMsQ0FBQSxTQUFiLENBVkEsQ0FGUTtJQUFBLENBVFo7O0FBQUEsOEJBdUJBLFFBQUEsR0FBVSxTQUFBLEdBQUE7QUFDTixVQUFBLG9MQUFBO0FBQUEsTUFBQSxVQUFBLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFULENBQUEsQ0FBa0IsQ0FBQyxLQUFuQixDQUF5QixJQUFDLENBQUEsU0FBUyxDQUFDLE1BQVgsSUFBcUIsSUFBQyxDQUFBLE1BQS9DLENBQWIsQ0FBQTtBQUFBLE1BRUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxXQUFELENBQWEsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUF4QixFQUErQixJQUFDLENBQUEsTUFBaEMsQ0FGZixDQUFBO0FBQUEsTUFHQSxNQUFBLEdBQVMsSUFBQyxDQUFBLE1B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QUFvQyxNQUFwQyxDQUEyQyxDQUFDLEtBQTVDLENBQUEsQ0FBbUQsQ0FBQyxNQUFwRCxDQUEyRCxVQUEzRCxDQUNULENBQUMsSUFEUSxDQUVMO0FBQUEsUUFBQSxHQUFBLEVBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtpQkFBQSxTQUFDLENBQUQsRUFBRyxDQUFILEdBQUE7bUJBQ04sTUFBQSxDQUFPLENBQVAsQ0FBQSxHQUFZLFdBRE47VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFWO0FBQUEsUUFFQSxHQUFBLEVBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtpQkFBQSxTQUFDLENBQUQsR0FBQTttQkFDTixNQUFBLENBQU8sQ0FBQyxDQUFDLEVBQUYsR0FBSyxDQUFDLENBQUMsQ0FBZCxDQUFBLEdBQW1CLEVBRGI7VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUZWO0FBQUEsUUFJQSxPQUFBLEVBQVMscUJBSlQ7T0FGSyxDQU9ULENBQUMsSUFQUSxDQU9ILENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLENBQUQsRUFBRyxDQUFILEdBQUE7QUFDRixVQUFBLElBQUksQ0FBQyxDQUFDLENBQUYsR0FBTSxVQUFBLEdBQWEsR0FBdkI7QUFDSSxtQkFBTyxDQUFDLENBQUMsQ0FBVCxDQURKO1dBQUE7QUFFQSxpQkFBTyxFQUFQLENBSEU7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQVBHLENBdEdULENBRE07SUFBQSxDQXZCVixDQUFBOzsyQkFBQTs7S0FEaUMsTUFBckMsQ0FBQTtBQUFBIiwiZmlsZSI6IndpZGdldHMvc3RhY2tlZGJhcmdyYXBoLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3Mgd2luZG93LlN0YWNrZWRCYXJHcmFwaCBleHRlbmRzIEdyYXBoXG4gICAgY29sb3JzIDogW1xuICAgICAgICAnIzI0OWViMidcbiAgICAgICAgJyNmNDU4NTgnXG4gICAgICAgICcjZWMwMDhjJ1xuICAgICAgICAnIzI0OWViMidcbiAgICAgICAgJyMwNURBRDcnXG4gICAgICAgICcjN0NFRjc4J1xuICAgIF1cblxuICAgIGNvbnN0cnVjdG9yOihAJGVsZSxAZ3JhcGhEYXRhKS0+XG5cbiAgICAgICAgQHJlZHJhd09uUmVzaXplID0gdHJ1ZVxuXG4gICAgICAgIEBtYXJnaW4gPSAge1xuICAgICAgICAgICAgbGVmdCAgIDogMTdcbiAgICAgICAgICAgIHJpZ2h0ICA6IDE1XG4gICAgICAgICAgICB0b3AgICAgOiAxNVxuICAgICAgICAgICAgYm90dG9tIDogMTlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3VwZXIgQCRlbGUsQGdyYXBoRGF0YVxuXG4gICAgb25SZW5kZXI6IC0+XG4gICAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2UoQGdyYXBoRGF0YS5jb2xvcnMgfHwgQGNvbG9ycylcblxuICAgICAgICBsZWdlbmRIZWlnaHQgPSBAZHJhd0xlZ2VuZHMoQGdyYXBoRGF0YS5sYWJlbHMsQGNvbG9ycylcbiAgICAgICAgaGVpZ2h0ID0gQGhlaWdodCAtIGxlZ2VuZEhlaWdodCAtIDIwXG5cbiAgICAgICAgeVNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkucmFuZ2UoW2hlaWdodCwwXSlcbiAgICAgICAgeFNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcblxuXG4gICAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2UoQGdyYXBoRGF0YS5jb2xvcnMgfHwgQGNvbG9ycylcblxuICAgICAgICBob3ZlckxhYmVsID0gZDMuc2NhbGUub3JkaW5hbCgpLnJhbmdlKEBncmFwaERhdGEubGFiZWxzKVxuXG4gICAgICAgIGdycGRHcmFwaERhdGEgPSBAZ3JhcGhEYXRhLmxhYmVscy5tYXAoKG4pID0+XG4gICAgICAgICAgICByZXR1cm4gQGdyYXBoRGF0YS5kYXRhLm1hcCAoZCwgaSkgLT5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB4OiBpXG4gICAgICAgICAgICAgICAgICAgIHk6ICtkW25dXG4gICAgICAgICAgICAgICAgICAgIHkwOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgZDMubGF5b3V0LnN0YWNrKCkgZ3JwZEdyYXBoRGF0YVxuXG4gICAgICAgICMgeERvbWFpbiA9IEBncmFwaERhdGEuZG9tYWluLnggfHwgYXV0b0RvbWFpbkNhbGMoJ3gnKVxuXG4gICAgICAgIHlEb21haW5NYXggPSBkMy5tYXgoQGdyYXBoRGF0YS5kYXRhLCAoZCktPlxuICAgICAgICAgICAgc3VtID0gMFxuICAgICAgICAgICAgZm9yIGssdiBvZiBkXG4gICAgICAgICAgICAgICAgaWYgayBpc250ICdsYWJlbCdcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IHZcbiAgICAgICAgICAgIHJldHVybiBzdW1cbiAgICAgICAgKVxuXG4gICAgICAgIHlEb21haW4gPSBbMCwgeURvbWFpbk1heCBdXG5cblxuICAgICAgICB4RG9tYWluID0gWzAsQGdyYXBoRGF0YS5kYXRhLmxlbmd0aC0xXVxuXG4gICAgICAgIHhTY2FsZS5kb21haW4oeERvbWFpbilcbiAgICAgICAgeVNjYWxlLmRvbWFpbih5RG9tYWluKVxuXG4gICAgICAgIHlBeGlzID0gZDMuc3ZnXG4gICAgICAgICAgICAuYXhpcygpXG4gICAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgICAgLnRpY2tTaXplKC1Ad2lkdGgsIDAsIDApXG4gICAgICAgICAgICAudGlja3MoNSlcbiAgICAgICAgICAgIC50aWNrRm9ybWF0KChkLCBpbmRleCkgLT5cbiAgICAgICAgICAgICAgICBpZiBpbmRleCA9PSAwXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgICAgICkub3JpZW50KCdsZWZ0JylcblxuICAgICAgICAjIERyYXcgeWF4aXMgZmlyc3RcbiAgICAgICAgQGdyYXBoR3JwLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3lheGlzJykuY2FsbCB5QXhpc1xuICAgICAgICB5QXhpc1dpZHRoID0gMFxuXG4gICAgICAgICMgd2lkdGggb2YgdGhlIGdyYXBoIGRlcGVuZHMgb24geUF4aXNXaWR0aFxuICAgICAgICBAZ3JhcGhHcnAuc2VsZWN0KCdnLnlheGlzJykuc2VsZWN0QWxsKCcudGljaycpLnNlbGVjdCgndGV4dCcpLmVhY2goKGQpLT5cbiAgICAgICAgICAgICAgICB5QXhpc1dpZHRoID0gaWYgKHlBeGlzV2lkdGggPCB0aGlzLmdldEJCb3goKS53aWR0aCkgdGhlbiB0aGlzLmdldEJCb3goKS53aWR0aCBlbHNlIHlBeGlzV2lkdGgpXG4gICAgICAgICAgICAuYXR0cih4OnlBeGlzV2lkdGgpXG5cbiAgICAgICAgd2lkdGggPSBAd2lkdGggLSB5QXhpc1dpZHRoXG4gICAgICAgIGxlbiAgID0gQGdyYXBoRGF0YS5kYXRhLmxlbmd0aFxuICAgICAgICB4U2NhbGUucmFuZ2UoW3dpZHRoL2xlbi8yLCB3aWR0aCAtIHdpZHRoL2xlbi8yXSlcblxuICAgICAgICB4QmFyID0gZDMuc3ZnXG4gICAgICAgICAgICAuYXhpcygpXG4gICAgICAgICAgICAuc2NhbGUoeFNjYWxlKVxuICAgICAgICAgICAgLnRpY2tzKEBncmFwaERhdGEuZGF0YS5sZW5ndGgtMSlcbiAgICAgICAgICAgIC50aWNrU2l6ZShoZWlnaHQgLCAwLCAwKVxuICAgICAgICAgICAgLnRpY2tGb3JtYXQoKGQsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIHJldHVybiBAZ3JhcGhEYXRhLmRhdGFbaW5kZXhdLmxhYmVsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub3JpZW50KCdib3R0b20nKVxuXG5cbiAgICAgICAgQGdyYXBoR3JwLnNlbGVjdCgnZy55YXhpcycpLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ2xpbmUnKS5hdHRyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGUoJyt5QXhpc1dpZHRoKycsMCknXG4gICAgICAgICAgICAgICAgeDI6IHdpZHRoXG4gICAgICAgIEBncmFwaEdycC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICd4YXhpcycpLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHlBeGlzV2lkdGggKyAnLDApJykuY2FsbCB4QmFyXG5cblxuICAgICAgICBncnBMYWJlbEVsZXMgPSBAZ3JhcGhHcnAuc2VsZWN0QWxsKCcudmFsZ3JvdXAnKS5kYXRhKGdycGRHcmFwaERhdGEpLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAndmFsZ3JvdXAnKS5zdHlsZSgnZmlsbCcsIChkLCBpKSAtPlxuICAgICAgICAgICAgY29sb3JTY2FsZSBpXG4gICAgICAgICkuYXR0cignY2xhc3MnLCAoZCwgaSkgLT5cbiAgICAgICAgICAgIGhvdmVyTGFiZWwgaVxuICAgICAgICApXG5cbiAgICAgICAgYmFyV2lkdGggPSBNYXRoLm1pbih3aWR0aC9sZW4qLjYsMTIwKVxuXG4gICAgICAgIHJlY3QgPSBncnBMYWJlbEVsZXMuc2VsZWN0QWxsKCdyZWN0JykuZGF0YShPYmplY3QpLmVudGVyKCkuYXBwZW5kKCdzdmc6cmVjdCcpXG4gICAgICAgIC5hdHRyKCd4JywgKGQsaSkgPT5cbiAgICAgICAgICAgIHhTY2FsZShpKSArIHlBeGlzV2lkdGggLSBiYXJXaWR0aC8yXG4gICAgICAgICkuYXR0cigneScsIChkKSA9PlxuICAgICAgICAgICAgeVNjYWxlKGQueTArZC55KVxuICAgICAgICApLmF0dHIoJ2hlaWdodCcsIChkKSA9PlxuICAgICAgICAgICAgeVNjYWxlKDApLXlTY2FsZShkLnkpXG4gICAgICAgICkuYXR0cignd2lkdGgnLCBiYXJXaWR0aClcblxuXG4gICAgICAgIHZhbHVlcyA9IGdycExhYmVsRWxlcy5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKE9iamVjdCkuZW50ZXIoKS5hcHBlbmQoJ3N2Zzp0ZXh0JylcbiAgICAgICAgLmF0dHJcbiAgICAgICAgICAgICd4JyAgICAgOiAoZCxpKSA9PlxuICAgICAgICAgICAgICAgIHhTY2FsZShpKSArIHlBeGlzV2lkdGhcbiAgICAgICAgICAgICd5JyAgICAgOiAoZCkgPT5cbiAgICAgICAgICAgICAgICB5U2NhbGUoZC55MCtkLnkpICsgM1xuICAgICAgICAgICAgJ2NsYXNzJyA6J2dyYXBoLXN0YWNrZWQtdmFsdWUnXG4gICAgICAgIC50ZXh0IChkLGkpID0+XG4gICAgICAgICAgICBpZiAoZC55ID4geURvbWFpbk1heCAqIDAuMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZC55XG4gICAgICAgICAgICByZXR1cm4gJydcblxuXG4gICAgICAgIHJldHVyblxuIl19