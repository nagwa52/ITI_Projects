<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h2>The Employees</h2>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th align="left">Employee Name</th>
            <th align="left"> Work Phone</th>
            <th align="left">Mobile Phone </th>
            <th align="left">Home Phone </th>
            <th align="left">Address</th>
            <th align="left">Email</th>
          </tr>
          <tbody>
            <xsl:for-each select="employees/employee">
              <tr>
                <td>
                  <xsl:value-of select="name"/>
                </td>
                <td>
                  <xsl:for-each select="phones">
                    <div>
                      <xsl:value-of select="phone[@type='work']"/>
                    </div>
                  </xsl:for-each>
                </td>
                 <td>
                  <xsl:for-each select="phones">
                    <div>
                      <xsl:value-of select="phone[@type='mobile']"/>
                    </div>
                  </xsl:for-each>
                </td>
                 <td>
                  <xsl:for-each select="phones">
                    <div>
                      <xsl:value-of select="phone[@type='home']"/>
                    </div>
                  </xsl:for-each>
                </td>

                <td>
                  <xsl:for-each select="address">
                    <div>
                      <span>
                        <xsl:value-of select="street"/>
                      </span>,
                      <span>
                        <xsl:value-of select="buildingnumber"/>
                      </span>,
                      <span>
                        <xsl:value-of select="region"/>
                      </span>,
                      <span>
                        <xsl:value-of select="city"/>
                      </span>,
                      <span>
                        <xsl:value-of select="country"/>
                      </span>
                    </div>
                  </xsl:for-each>
                </td>
                <td>
                  <xsl:value-of select="email"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
 
